# CapitalPartnerACHRepayment

`capitalPartnerAchRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ACHRepaymentAttributes**](ACHRepaymentAttributes.md) |  | [default to undefined]
**relationships** | [**CapitalPartnerACHRepaymentRelationships**](CapitalPartnerACHRepaymentRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CapitalPartnerACHRepayment } from '@unit-finance/unit-node-sdk';

const instance: CapitalPartnerACHRepayment = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
