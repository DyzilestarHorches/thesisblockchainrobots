/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface CounterInterface extends Interface {
  getFunction(
    nameOrSignature: "count" | "dec" | "get" | "getNumber" | "good" | "inc"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "dec", values?: undefined): string;
  encodeFunctionData(functionFragment: "get", values?: undefined): string;
  encodeFunctionData(functionFragment: "getNumber", values?: undefined): string;
  encodeFunctionData(functionFragment: "good", values?: undefined): string;
  encodeFunctionData(functionFragment: "inc", values?: undefined): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNumber", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "good", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inc", data: BytesLike): Result;
}

export interface Counter extends BaseContract {
  connect(runner?: ContractRunner | null): Counter;
  waitForDeployment(): Promise<this>;

  interface: CounterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  count: TypedContractMethod<[], [bigint], "view">;

  dec: TypedContractMethod<[], [void], "nonpayable">;

  get: TypedContractMethod<[], [string], "view">;

  getNumber: TypedContractMethod<[], [bigint], "view">;

  good: TypedContractMethod<[], [string], "view">;

  inc: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "count"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dec"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "get"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "good"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "inc"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}
