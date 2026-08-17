# VerifyAccount200ResponseDataAccount

Present when exists is true. Same shape as GET /accounts/:id. May be any account type (e.g. depositAccount, walletAccount).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**WalletAccountAttributes**](WalletAccountAttributes.md) |  | [default to undefined]
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VerifyAccount200ResponseDataAccount } from '@unit-finance/unit-node-sdk';

const instance: VerifyAccount200ResponseDataAccount = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
