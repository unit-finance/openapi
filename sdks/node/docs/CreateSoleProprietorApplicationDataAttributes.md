# CreateSoleProprietorApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssn** | **string** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. | [optional] [default to undefined]
**passport** | **string** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] [default to undefined]
**nationality** | **string** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] [default to undefined]
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the individual. | [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the individual. Must be a US address. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone number of the individual. | [default to undefined]
**email** | **string** | Email address of the individual. | [default to undefined]
**soleProprietorship** | **boolean** | Set this to true in order to indicate that the individual is a sole proprietor. | [default to undefined]
**ein** | **string** | Optional. If the individual is a sole proprietor who has an Employer Identification Number, specify it here. Not all sole proprietors have an EIN, so this attribute is optional, even when soleProprietorship is set to true. | [optional] [default to undefined]
**dba** | **string** | Optional. If the individual is a sole proprietor who is doing business under a different name, specify it here. This attribute is optional, even when soleProprietorship is set to true. | [optional] [default to undefined]
**evaluationParams** | **string** | Optional. Evaluation Params for this entity. | [optional] [default to undefined]
**annualRevenue** | [**SoleProprietorAnnualRevenueType**](SoleProprietorAnnualRevenueType.md) | Required if nationality is not US. For sole proprietors, specify the annual revenue here. | [default to undefined]
**numberOfEmployees** | [**SoleProprietorNumberOfEmployeesType**](SoleProprietorNumberOfEmployeesType.md) | Required if nationality is not US. For sole proprietors, specify the number of employees here. | [default to undefined]
**businessVertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | For sole proprietors, specify the business vertical here. | [default to undefined]
**website** | **string** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. | [default to undefined]
**ip** | **string** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**deviceFingerprints** | [**Array&lt;DeviceFingerprintType&gt;**](DeviceFingerprintType.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] [default to undefined]
**jwtSubject** | **string** | Optional. See this section for more information. | [optional] [default to undefined]
**banks** | **Array&lt;string&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org\&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] [default to undefined]
**requestedProducts** | [**Array&lt;RequestedProductType&gt;**](RequestedProductType.md) | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. | [optional] [default to undefined]

## Example

```typescript
import { CreateSoleProprietorApplicationDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateSoleProprietorApplicationDataAttributes = {
    ssn,
    passport,
    nationality,
    fullName,
    dateOfBirth,
    address,
    phone,
    email,
    soleProprietorship,
    ein,
    dba,
    evaluationParams,
    annualRevenue,
    numberOfEmployees,
    businessVertical,
    website,
    ip,
    tags,
    idempotencyKey,
    deviceFingerprints,
    jwtSubject,
    banks,
    requestedProducts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
