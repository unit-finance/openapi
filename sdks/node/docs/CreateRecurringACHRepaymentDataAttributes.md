# CreateRecurringACHRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Repayment description (maximum of 50 characters). This will show up on the statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional repayment description (maximum of 80 characters), not all institutions present that in payment description. | [optional] [default to undefined]
**sameDay** | **boolean** | Optional, default is false. See Same Day ACH. | [optional] [default to undefined]
**secCode** | **string** | See Use a custom SEC Code. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateRecurringACHRepaymentDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateRecurringACHRepaymentDataAttributes = {
    description,
    addenda,
    sameDay,
    secCode,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
