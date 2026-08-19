# CreateIndividualApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssn** | **string** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. | [optional] [default to undefined]
**passport** | **string** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] [default to undefined]
**nationality** | **string** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] [default to undefined]
**fullName** | [**FullName**](FullName.md) | Full name of the individual. | [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**Address**](Address.md) | Address of the individual. Must be a US address. | [default to undefined]
**phone** | [**Phone**](Phone.md) | Phone number of the individual. | [default to undefined]
**email** | **string** | Email address of the individual. | [default to undefined]
**evaluationParams** | **string** | Optional. Evaluation Params for this entity. | [optional] [default to undefined]
**occupation** | [**Occupation**](Occupation.md) | Occupation of the individual. | [default to undefined]
**annualIncome** | [**AnnualIncome**](AnnualIncome.md) | Required if nationality is not US. Annual income of the individual. | [default to undefined]
**sourceOfIncome** | [**SourceOfIncome**](SourceOfIncome.md) | Required if nationality is not US. Source of income of the individual. | [default to undefined]
**ip** | **string** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**deviceFingerprints** | [**Array&lt;DeviceFingerprint&gt;**](DeviceFingerprint.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] [default to undefined]
**jwtSubject** | **string** | Optional. See this section for more information. | [optional] [default to undefined]
**banks** | **Array&lt;string&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org\&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] [default to undefined]

## Example

```typescript
import { CreateIndividualApplicationDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateIndividualApplicationDataAttributes = {
    ssn,
    passport,
    nationality,
    fullName,
    dateOfBirth,
    address,
    phone,
    email,
    evaluationParams,
    occupation,
    annualIncome,
    sourceOfIncome,
    ip,
    tags,
    idempotencyKey,
    deviceFingerprints,
    jwtSubject,
    banks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
