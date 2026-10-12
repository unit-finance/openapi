# CheckDepositAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | One of AwaitingImages, AwaitingFrontImage, AwaitingBackImage, Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. | [default to undefined]
**reason** | **string** | More information about the status. | [optional] [default to undefined]
**description** | **string** | Check Deposit description (maximum of 50 characters). | [default to undefined]
**amount** | **string** | The amount (cents) of the check deposit. | [default to undefined]
**checkNumber** | **string** | The serial number printed at the bottom of the check | [optional] [default to undefined]
**counterparty** | [**CheckCounterpartyType**](CheckCounterpartyType.md) | The party the check belongs to. | [optional] [default to undefined]
**clearingDaysOverride** | **number** | The amount of days it will take a check deposit to clear if a clearingDaysOverride was provided. See Dynamic Clearing Period | [optional] [default to undefined]
**settlementDate** | **string** | Optional, For Pending or Clearing, shows the date on which the check will be settled. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { CheckDepositAttributes } from 'unit-openapi-node-sdk';

const instance: CheckDepositAttributes = {
    createdAt,
    status,
    reason,
    description,
    amount,
    checkNumber,
    counterparty,
    clearingDaysOverride,
    settlementDate,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
