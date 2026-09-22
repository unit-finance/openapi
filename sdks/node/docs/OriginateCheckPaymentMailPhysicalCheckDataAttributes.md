# OriginateCheckPaymentMailPhysicalCheckDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). Must be less than 100000000000 | [default to undefined]
**memo** | **string** | Check payment memo. This will be printed on the check (maximum of 40 characters) | [optional] [default to undefined]
**sendDate** | **string** | Date only (e.g. 2022-06-23). The date the check will be submitted to the processor. Up to 180 days in the future. If left null or in the past, will default to today. | [optional] [default to undefined]
**counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The payee\&#39;s details . street and street2 combined may contain up to 50 characters. country must be \&quot;US\&quot;. | [default to undefined]
**description** | **string** | An internal description (maximum of 255 characters). This will not be printed on the check. | [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { OriginateCheckPaymentMailPhysicalCheckDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: OriginateCheckPaymentMailPhysicalCheckDataAttributes = {
    amount,
    memo,
    sendDate,
    counterparty,
    description,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
