# UpdateBusinessCustomerOfficerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | [optional] [default to undefined]
**occupation** | [**OccupationType**](OccupationType.md) | Occupation of the officer. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncomeType**](AnnualIncomeType.md) | Annual income of the officer. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Source of income of the officer. | [optional] [default to undefined]

## Example

```typescript
import { UpdateBusinessCustomerOfficerDataAttributes } from 'unit-openapi-node-sdk';

const instance: UpdateBusinessCustomerOfficerDataAttributes = {
    title,
    occupation,
    annualIncome,
    sourceOfIncome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
