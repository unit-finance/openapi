# OnboardingCreditApplication

`OnboardingCreditApplication` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ExistingCustomerCreditApplicationAttributes**](ExistingCustomerCreditApplicationAttributes.md) |  | [default to undefined]
**relationships** | [**OnboardingCreditApplicationRelationships**](OnboardingCreditApplicationRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OnboardingCreditApplication } from 'unit-openapi-node-sdk';

const instance: OnboardingCreditApplication = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
