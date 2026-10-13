# CardTransaction

A transaction that represents various card transactions that are not Purchase or ATM transactions. Most commonly, these transactions represent peer-to-peer payments (e.g. Venmo, CashApp) and gig economy employee payouts (ride sharing, deliveries, etc).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CardTransactionAttributes**](CardTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**CardTransactionRelationships**](CardTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardTransaction } from '@unit-finance/unit-openapi-node-sdk';

const instance: CardTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
