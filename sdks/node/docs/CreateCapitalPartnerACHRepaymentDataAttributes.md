# CreateCapitalPartnerACHRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | [default to undefined]
**amount** | **number** | The amount to repay. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**sameDay** | **boolean** | Optional, default is false. See Same Day ACH. | [optional] [default to undefined]
**secCode** | **string** | See Use a custom SEC Code. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateCapitalPartnerACHRepaymentDataAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: CreateCapitalPartnerACHRepaymentDataAttributes = {
    description,
    amount,
    addenda,
    tags,
    sameDay,
    secCode,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
