import logo from './logo.svg';
import './App.css';



import Neon, {rpc, sc,wallet} from '@cityofzion/neon-js';
import {Account} from '@cityofzion/neon-core/lib/wallet'

console.log(Neon);

// const sb = Neon.create.scriptBuilder();
// sb.emitAppCall("e0bf1ce7612c8b25f3728f5eac6591ee34e597c0", "main");

// rpc.Query.invokeScript(sb.str)
   // .execute('http://localhost:50012')
  // .then((res) => {
     // console.log(res);
   // });

// const tx = Neon.create.invocationTx('NP5XEtdxy9vqF5Ef5FGuzcsRND5Yc3BSp4', {}, {}, sb.str, 0);

// console.log(tx)



// const props = {
   // scriptHash: 'e0bf1ce7612c8b25f3728f5eac6591ee34e597c0', // Scripthash for the contract
   // operation: 'main',
   // args:["",[]]
// }

// const script = Neon.create.script(props)

// rpc.Query.invokeScript(script)
   // .execute('http://localhost:50012')
   // .then(res => {
     // console.log(res) // You should get a result with state: "HALT"
   // })
   
   class N3Helper {
	   
	    convertParams = (args: any[]): any[] => args.map(a => (
        a.value === undefined ? a :
            a.type === 'Address'
                ? sc.ContractParam.hash160(a.value)
                : a.type === 'ScriptHash'
                    ? sc.ContractParam.hash160(Neon.u.HexString.fromHex(a.value))
                    : a.type === 'Array'
                        ? sc.ContractParam.array(...this.convertParams(a.value))
                        : a
    ))
	
	contractInvoke = async(convertedArgs)=> {
		
		let resp
        try {
            resp =  await contract.invoke("save",convertedArgs)
			console.log(resp);
        } catch (e) {
            console.log(e)
            resp = { error: {message: e.message, ...e} }
        }
	}

	   
   }
   
   
   const scriptHash = 'ce76c4b659ec9c0859c2363b020447070b377ea1';
   const rpcAddress = 'http://localhost:50012';
   const sendingKey = '38921c670ecbf38d4889e5db306793754d23b53412a5fc7604c8f6c959798ec5';
   const account = new wallet.Account(sendingKey);
   
   console.log(account)
   
   

const contract = new Neon.experimental.SmartContract(
            Neon.u.HexString.fromHex(scriptHash),
            {
                networkMagic: 711206589,
                rpcAddress: rpcAddress,
                account: account,
            }
        );
		const args= [{
            type: "String",
            value: "TestChirag"
          }];
const convertedArgs = new N3Helper().convertParams(args)
console.log(convertedArgs)

new N3Helper().contractInvoke(convertedArgs)
        




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
