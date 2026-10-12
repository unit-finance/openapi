# CreateOnboardingCreditApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatorAccessTokens** | **Array&lt;string&gt;** | Array of aggregator access tokens which are Plaid (or other account linking platform) integration tokens. See Plaid processor token | [optional] [default to undefined]
**annualIncome** | **number** | The annual income of the applicant. | [optional] [default to undefined]
**numberOfEmployees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees of the business. | [optional] [default to undefined]
**yearsInBusiness** | **number** | Number of years the business has been in operation. | [optional] [default to undefined]
**additionalUnderwritingData** | **{ [key: string]: any; }** | Object containing key-value pairs of underwriting data per credit policy. | [optional] [default to undefined]
**idempotencyKey** | **string** | See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateOnboardingCreditApplicationDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateOnboardingCreditApplicationDataAttributes = {
    aggregatorAccessTokens,
    annualIncome,
    numberOfEmployees,
    yearsInBusiness,
    additionalUnderwritingData,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
