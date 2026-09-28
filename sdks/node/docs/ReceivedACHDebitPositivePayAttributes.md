# ReceivedACHDebitPositivePayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | One of Active, Expired, or Cancelled. | [default to undefined]
**originatorName** | **string** | Name of the ACH debit originator. | [default to undefined]
**originatorEntityId** | **string** | Entity ID of the ACH debit originator. | [default to undefined]
**amount** | **number** | Maximum allowed debit amount in cents. | [default to undefined]
**expirationDate** | **string** | When the authorization expires. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { ReceivedACHDebitPositivePayAttributes } from '@unit-finance/unit-node-sdk';

const instance: ReceivedACHDebitPositivePayAttributes = {
    createdAt,
    status,
    originatorName,
    originatorEntityId,
    amount,
    expirationDate,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
