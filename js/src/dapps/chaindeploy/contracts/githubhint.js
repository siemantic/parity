// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import abi from '~/contracts/abi/githubhint';

const id = 'githubhint';
const sourceUrl = 'https://github.com/ethcore/contracts/blob/58842b92c00e3c45a84b6d0ac9b842f016dde50a/GithubHint.sol';
const deployParams = [];
const byteCode = '0x6060604052341561000c57fe5b5b6105868061001c6000396000f300606060405263ffffffff60e060020a60003504166302f2008d81146100425780632196ae0d1461009b578063267b6922146101055780637c8c6643146101c9575bfe5b341561004a57fe5b60408051602060046024803582810135601f810185900485028601850190965285855261009995833595939460449493929092019181908401838280828437509496506101de95505050505050565b005b34156100a357fe5b60408051602060046024803582810135601f81018590048502860185019096528585526100999583359593946044949392909201918190840183828082843750949650505092356bffffffffffffffffffffffff191692506102be915050565b005b341561010d57fe5b6101186004356103b1565b604080516bffffffffffffffffffffffff1984166020820152600160a060020a03831691810191909152606080825284546002600019610100600184161502019091160490820181905281906080820190869080156101b85780601f1061018d576101008083540402835291602001916101b8565b820191906000526020600020905b81548152906001019060200180831161019b57829003601f168201915b505094505050505060405180910390f35b34156101d157fe5b6100996004356103de565b005b6000828152602081905260409020600201548290600160a060020a031615801590610227575060008181526020819052604090206002015433600160a060020a03908116911614155b15610231576102b8565b6040805160608101825283815260006020808301829052600160a060020a0333168385015286825281815292902081518051929391926102749284920190610472565b506020820151600182018054606060020a909204600160a060020a031992831617905560409092015160029091018054600160a060020a0392909216919092161790555b5b505050565b6000838152602081905260409020600201548390600160a060020a031615801590610307575060008181526020819052604090206002015433600160a060020a03908116911614155b15610311576103aa565b604080516060810182528481526bffffffffffffffffffffffff198416602080830191909152600160a060020a0333168284015260008781528082529290922081518051929391926103669284920190610472565b506020820151600182018054606060020a909204600160a060020a031992831617905560409092015160029091018054600160a060020a0392909216919092161790555b5b50505050565b600060208190529081526040902060018101546002820154606060020a90910290600160a060020a031683565b6000818152602081905260409020600201548190600160a060020a031615801590610427575060008181526020819052604090206002015433600160a060020a03908116911614155b156104315761046d565b60008281526020819052604081209061044a82826104f1565b50600181018054600160a060020a03199081169091556002909101805490911690555b5b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104b357805160ff19168380011785556104e0565b828001600101855582156104e0579182015b828111156104e05782518255916020019190600101906104c5565b5b506104ed929150610539565b5090565b50805460018160011615610100020316600290046000825580601f106105175750610535565b601f0160209004906000526020600020908101906105359190610539565b5b50565b61055791905b808211156104ed576000815560010161053f565b5090565b905600a165627a7a7230582052feaedd31c0eb59576c0387a156d5302097ac12bf4c1de0d67135e8e1f35c960029';

export {
  abi,
  byteCode,
  deployParams,
  id,
  sourceUrl
};