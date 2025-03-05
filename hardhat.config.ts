import { HardhatUserConfig } from '@sun-protocol/tron-studio';
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-vyper";
import "@sun-protocol/tron-studio";

const config: HardhatUserConfig = {
  solidity: {
	  compilers:[ 
	          {"version": "0.8.23"},
		  {"version": "0.8.22"},
	  ]
  },
  vyper: {
	  compilers:[
		  {"version": "0.2.8"},
		  {"version": "0.3.10"}
	  ]
  },
  networks: {
    tron: {
      url: `http://127.0.0.1:9090/jsonrpc`,
      tron: true,
    },
  },
};

export default config;
