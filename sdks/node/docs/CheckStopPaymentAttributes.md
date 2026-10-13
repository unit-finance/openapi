# CheckStopPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**amount** | **number** | The amount (cents) of the check payment. | [optional] [default to undefined]
**status** | **string** | The status of the stop payment, one of Active or Disabled. | [default to undefined]
**checkNumber** | **string** | The checkNumber of the check payments that the stop payment operation will be applied to. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { CheckStopPaymentAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CheckStopPaymentAttributes = {
    createdAt,
    updatedAt,
    amount,
    status,
    checkNumber,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
