# HealthcareAmountsType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dentalAmount** | **number** | Dental expense (cents). | [default to undefined]
**transitAmount** | **number** | Transit expense (cents). | [default to undefined]
**visionOpticalAmount** | **number** | Vision expense (cents). | [default to undefined]
**prescriptionRXAmount** | **number** | Prescription drugs expense (cents). | [default to undefined]
**clinicOtherQualifiedMedicalAmount** | **number** | Misc medical expense (cents). | [default to undefined]
**totalHealthcareAmount** | **number** | Total medical expense (cents). | [default to undefined]

## Example

```typescript
import { HealthcareAmountsType } from '@unit-finance/unit-openapi-node-sdk';

const instance: HealthcareAmountsType = {
    dentalAmount,
    transitAmount,
    visionOpticalAmount,
    prescriptionRXAmount,
    clinicOtherQualifiedMedicalAmount,
    totalHealthcareAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
