// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Option, Set, Struct, i128, u32, u64 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { ClassId } from '@polkadot/types/interfaces/uniques';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AuctionDetails */
export interface AuctionDetails extends Struct {
  readonly creator: AccountId;
  readonly winner: Option<AccountId>;
  readonly token0: ITuple<[ClassId, TokenId]>;
  readonly token1: CurrencyId;
  readonly min1: Balance;
  readonly duration: BlockNumber;
  readonly start_at: BlockNumber;
}

/** @name AuctionId */
export interface AuctionId extends u32 {}

/** @name CID */
export interface CID extends Bytes {}

/** @name ClassData */
export interface ClassData extends Struct {
  readonly deposit: Balance;
  readonly properties: Properties;
}

/** @name ClassIdOf */
export interface ClassIdOf extends ClassId {}

/** @name ClassInfoOf */
export interface ClassInfoOf extends Struct {
  readonly metadata: CID;
  readonly totalIssuance: TokenId;
  readonly owner: AccountId;
  readonly data: ClassData;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[TokenSymbol, TokenSymbol]>;
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name DomainInfo */
export interface DomainInfo extends Struct {
  readonly native: AccountId;
  readonly relay: Option<AccountId>;
  readonly ethereum: Bytes;
  readonly deposit: Balance;
}

/** @name Order */
export interface Order extends Struct {
  readonly base_currency_id: CurrencyId;
  readonly base_amount: Compact<Balance>;
  readonly target_currency_id: CurrencyId;
  readonly target_amount: Compact<Balance>;
  readonly owner: AccountId;
}

/** @name OrderId */
export interface OrderId extends u32 {}

/** @name OrderOf */
export interface OrderOf extends Order {}

/** @name PoolDetails */
export interface PoolDetails extends Struct {
  readonly maker: AccountId;
  readonly taker: Option<AccountId>;
  readonly token0: ITuple<[ClassId, TokenId]>;
  readonly token1: CurrencyId;
  readonly total1: Balance;
}

/** @name Properties */
export interface Properties extends Set {
  readonly isTransferable: boolean;
  readonly isBurnable: boolean;
}

/** @name TokenData */
export interface TokenData extends Struct {
  readonly deposit: Balance;
}

/** @name TokenId */
export interface TokenId extends u64 {}

/** @name TokenIdOf */
export interface TokenIdOf extends TokenId {}

/** @name TokenInfoOf */
export interface TokenInfoOf extends Struct {
  readonly metadata: CID;
  readonly owner: AccountId;
  readonly data: TokenData;
}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isName: boolean;
  readonly isAusd: boolean;
  readonly isDot: boolean;
  readonly isLdot: boolean;
  readonly isRenbtc: boolean;
  readonly isKar: boolean;
  readonly isKusd: boolean;
  readonly isKsm: boolean;
  readonly isLksm: boolean;
}

export type PHANTOM_DEFAULT = 'default';
