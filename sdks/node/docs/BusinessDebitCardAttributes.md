# BusinessDebitCardAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [optional] [default to undefined]
**last4Digits** | **string** | Last 4 digits of the debit card. | [default to undefined]
**expirationDate** | **string** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. | [default to undefined]
**shippingAddress** | [**AddressType**](AddressType.md) | Shipping address, if specified. | [optional] [default to undefined]
**ssn** | **string** | SSN of the card holder (numbers only), if specified during card creation. | [optional] [default to undefined]
**passport** | **string** | Passport number of the card holder, if specified during card creation. | [optional] [default to undefined]
**nationality** | **string** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the card holder nationality. (e.g. \&quot;US\&quot;). | [optional] [default to undefined]
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the card holder. | [default to undefined]
**dateOfBirth** | **string** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Address of the card holder. | [default to undefined]
**bin** | **string** | 9-digit Bank Identification Number (BIN). | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | [default to undefined]
**email** | **string** | Email address of the card holder. | [default to undefined]
**status** | **string** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. | [default to undefined]
**design** | **string** | Card design, if specified. | [optional] [default to undefined]

## Example

```typescript
import { BusinessDebitCardAttributes } from '@unit-finance/unit-node-sdk';

const instance: BusinessDebitCardAttributes = {
    createdAt,
    updatedAt,
    last4Digits,
    expirationDate,
    shippingAddress,
    ssn,
    passport,
    nationality,
    fullName,
    dateOfBirth,
    address,
    bin,
    phone,
    email,
    status,
    design,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
