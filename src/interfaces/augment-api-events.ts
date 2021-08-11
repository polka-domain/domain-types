// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, U8aFixed, u16, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { MessageId, OverweightIndex } from '@polkadot/types/interfaces/cumulus';
import type { ParaId, RelayChainBlockNumber } from '@polkadot/types/interfaces/parachains';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, Balance, BalanceOf, BlockNumber, Hash, MultiAddress, Weight } from '@polkadot/types/interfaces/runtime';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { ClassId } from '@polkadot/types/interfaces/uniques';
import type { MultiLocation, Outcome, Xcm, XcmError } from '@polkadot/types/interfaces/xcm';
import type { AmountOf, AuctionId, ClassIdOf, CurrencyId, CurrencyIdOf, OrderId, TokenId, TokenIdOf } from 'domain-types/interfaces/default';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    auction: {
      AuctionBid: AugmentedEvent<ApiType, [AuctionId, AccountId, Balance]>;
      AuctionCancelled: AugmentedEvent<ApiType, [AuctionId]>;
      AuctionCreated: AugmentedEvent<ApiType, [AuctionId, AccountId, ITuple<[ClassId, TokenId]>, CurrencyId, Balance, BlockNumber, BlockNumber, BlockNumber]>;
      AuctionEnd: AugmentedEvent<ApiType, [AuctionId, Option<AccountId>, Option<Balance>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, Outcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    currency: {
      /**
       * Update balance success. [currency_id, who, amount]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AmountOf]>;
      /**
       * Deposit success. [currency_id, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Currency transfer success. [currency_id, from, to, amount]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AccountId, BalanceOf]>;
      /**
       * Withdraw success. [currency_id, who, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [MessageId, Outcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [MessageId]>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       * \[ id, index, required \]
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [MessageId, OverweightIndex, Weight]>;
      /**
       * Downward message from the overweight queue was executed.
       * \[ index, used \]
       **/
      OverweightServiced: AugmentedEvent<ApiType, [OverweightIndex, Weight]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [MessageId]>;
      /**
       * The weight limit for handling downward messages was reached.
       * \[ id, remaining, required \]
       **/
      WeightExhausted: AugmentedEvent<ApiType, [MessageId, Weight, Weight]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    domainRegistrar: {
      BindAddress: AugmentedEvent<ApiType, [AccountId, Bytes, Option<MultiAddress>, Option<MultiAddress>, Option<MultiAddress>, Option<MultiAddress>]>;
      DomainDeregistered: AugmentedEvent<ApiType, [AccountId, Bytes, ITuple<[ClassId, TokenId]>]>;
      DomainRegistered: AugmentedEvent<ApiType, [AccountId, Bytes, Option<MultiAddress>, Option<MultiAddress>, Option<MultiAddress>, Option<MultiAddress>, Balance, ITuple<[ClassId, TokenId]>]>;
      Sent: AugmentedEvent<ApiType, [AccountId, Bytes]>;
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Bytes, ITuple<[ClassId, TokenId]>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nft: {
      /**
       * Burned NFT token. \[owner, class_id, token_id\]
       **/
      BurnedToken: AugmentedEvent<ApiType, [AccountId, ClassIdOf, TokenIdOf]>;
      /**
       * Burned NFT token with remark. \[owner, class_id, token_id, remark_hash\]
       **/
      BurnedTokenWithRemark: AugmentedEvent<ApiType, [AccountId, ClassIdOf, TokenIdOf, Hash]>;
      /**
       * Created NFT class. \[owner, class_id\]
       **/
      CreatedClass: AugmentedEvent<ApiType, [AccountId, ClassIdOf]>;
      /**
       * Destroyed NFT class. \[owner, class_id\]
       **/
      DestroyedClass: AugmentedEvent<ApiType, [AccountId, ClassIdOf]>;
      /**
       * Minted NFT token. \[from, to, class_id, quantity\]
       **/
      MintedToken: AugmentedEvent<ApiType, [AccountId, AccountId, ClassIdOf, u32]>;
      /**
       * Transferred NFT token. \[from, to, class_id, token_id\]
       **/
      TransferredToken: AugmentedEvent<ApiType, [AccountId, AccountId, ClassIdOf, TokenIdOf]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    order: {
      OrderCancelled: AugmentedEvent<ApiType, [OrderId]>;
      OrderCreated: AugmentedEvent<ApiType, [OrderId, AccountId, ITuple<[ClassId, TokenId]>, CurrencyId, Balance]>;
      OrderSwapped: AugmentedEvent<ApiType, [OrderId, AccountId, Balance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       * \[ weight_used, result_mqc_head \]
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [Weight, Hash]>;
      /**
       * Some downward messages have been received and will be processed.
       * \[ count \]
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [u32]>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [Hash]>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [RelayChainBlockNumber]>;
      /**
       * The validation function has been scheduled to apply as of the contained relay chain
       * block number.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, [RelayChainBlockNumber]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      Attempted: AugmentedEvent<ApiType, [Outcome]>;
      Sent: AugmentedEvent<ApiType, [MultiLocation, MultiLocation, Xcm]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    spambot: {
      ErrorSendingPing: AugmentedEvent<ApiType, [XcmError, ParaId, u32, Bytes]>;
      ErrorSendingPong: AugmentedEvent<ApiType, [XcmError, ParaId, u32, Bytes]>;
      Pinged: AugmentedEvent<ApiType, [ParaId, u32, Bytes]>;
      PingSent: AugmentedEvent<ApiType, [ParaId, u32, Bytes]>;
      Ponged: AugmentedEvent<ApiType, [ParaId, u32, Bytes, BlockNumber]>;
      PongSent: AugmentedEvent<ApiType, [ParaId, u32, Bytes]>;
      UnknownPong: AugmentedEvent<ApiType, [ParaId, u32, Bytes]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * On on-chain remark happened. \[origin, remark_hash\]
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId, Hash]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[currency_id,
       * account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[currency_id,
       * account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       * \[currency_id, who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Transfer succeeded. \[currency_id, from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [CurrencyId, AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       * \[currency_id, who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [Option<Hash>, XcmError]>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
