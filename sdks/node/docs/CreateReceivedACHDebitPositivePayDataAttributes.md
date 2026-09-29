# CreateReceivedACHDebitPositivePayDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originatorName** | **string** | Name of the ACH Received Payment originator. Required if originatorEntityId is not provided. | [default to undefined]
**originatorEntityId** | **string** | Entity ID of the ACH Received Payment originator. Required if originatorName is not provided. | [default to undefined]
**amount** | **number** | Maximum allowed debit amount in cents. Decisioning uses this as a maximum. | [optional] [default to undefined]
**expirationDate** | **string** | When the authorization expires. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateReceivedACHDebitPositivePayDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateReceivedACHDebitPositivePayDataAttributes = {
    originatorName,
    originatorEntityId,
    amount,
    expirationDate,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
