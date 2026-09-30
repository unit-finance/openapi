# ExternalRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**amount** | **number** | The amount (cents) of the repayment. | [default to undefined]
**status** | **string** | The status of the external repayment. One of Sent or Returned. | [default to undefined]
**description** | **string** | Repayment description. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { ExternalRepaymentAttributes } from '@unit-finance/unit-node-sdk';

const instance: ExternalRepaymentAttributes = {
    createdAt,
    updatedAt,
    amount,
    status,
    description,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
