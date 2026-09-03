# CreateACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). | [default to undefined]
**direction** | **string** | The direction in which the funds flow. | [default to undefined]
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other side of the ACH payment. | [default to undefined]
**description** | **string** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]
**sameDay** | **boolean** | Optional, default is false. See Same Day ACH. | [optional] [default to undefined]
**secCode** | **string** | Optional. See Use a custom SEC Code. | [optional] [default to undefined]
**clearingDaysOverride** | **number** | Optional. See Dynamic Clearing Period. | [optional] [default to undefined]

## Example

```typescript
import { CreateACHPaymentDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateACHPaymentDataAttributes = {
    amount,
    direction,
    counterparty,
    description,
    addenda,
    idempotencyKey,
    tags,
    sameDay,
    secCode,
    clearingDaysOverride,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
