# ReceivableAttributesTotalInterest

JSON Object holding the interest of the receivable: charged (Integer, cents) is the interest charged so far and accrued (decimal String, cents) is the interest accrued so far.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charged** | **number** | The interest charged so far, in cents. | [optional] [default to undefined]
**accrued** | **string** | The interest accrued so far, in cents, as a decimal string. | [optional] [default to undefined]

## Example

```typescript
import { ReceivableAttributesTotalInterest } from '@unit-finance/unit-openapi-node-sdk';

const instance: ReceivableAttributesTotalInterest = {
    charged,
    accrued,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
