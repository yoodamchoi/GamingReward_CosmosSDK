import {
    SigningCosmosClient,
    Coins,
    EnigmaUtils,
    Secp256k1Pen,
    pubkeyToAddress,
    encodeSecp256k1Pubkey,
  } from "@cosmjs/sdk";
  
  const chainId = "mychain";
  const mnemonic =""
  
  const enigmaUtils = new EnigmaUtils(chainId);
  
  const contractAddress = "";
  
  export const createSigningClient = async () => {
    const pen = await Secp256k1Pen.fromMnemonic(mnemonic);
    const pubkey = encodeSecp256k1Pubkey(pen.pubkey);
    const address = pubkeyToAddress(pubkey, chainId);
    const client = new SigningCosmosClient("http://localhost:26657", address, pen);
    return client;
  };
  
  // Sends a transaction to the contract to create a new game
  export const createGame = async (client, name, description, reward) => {
    const msg = {
      type: "create_game",
      value: {
        name,
        description,
        reward: Coins.fromString(`${reward}ucosm`),
      },
    };
    const fee = {
      amount: Coins.fromString("5000ucosm"),
      gas: "200000",
    };
    const result = await client.signAndBroadcast(
      [msg],
      enigmaUtils.newContractInstance(contractAddress),
      fee
    );
    return result;
  };
  
  // Sends a transaction to the contract to update a game's description
  export const updateGame = async (client, gameId, description) => {
    const msg = {
      type: "update_game",
      value: {
        id: gameId,
        description,
      },
    };
    const fee = {
      amount: Coins.fromString("5000ucosm"),
      gas: "200000",
    };
    const result = await client.signAndBroadcast(
      [msg],
      enigmaUtils.newContractInstance(contractAddress),
      fee
    );
    return result;
  };
  
  // Sends a transaction to the contract to delete a game
  export const deleteGame = async (client, gameId) => {
    const msg = {
      type: "delete_game",
      value: {
        id: gameId,
      },
    };
    const fee = {
      amount: Coins.fromString("5000ucosm"),
      gas: "200000",
    };
    const result = await client.signAndBroadcast(
      [msg],
      enigmaUtils.newContractInstance(contractAddress),
      fee
    );
    return result;
  };
  
  // Queries the contract to get a list of all games
  export const getGames = async () => {
    const response = await fetch(
      `http://localhost:1317/wasm/contracts/${contractAddress}/state?query-msg=%7B%22get_games%22%3A%7B%7D%7D`
    );
    const json = await response.json();
    const games = JSON.parse(json.result.data);
    return games;
  };
  