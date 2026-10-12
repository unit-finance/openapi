# AuthorizedUserType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the authorized user. | [default to undefined]
**email** | **string** | The authorized user\&#39;s email address. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | The authorized user\&#39;s phone number. This number will be used for One Time Password (OTP) authentication. | [default to undefined]
**jwtSubject** | **string** | Optional. See this section for more information. | [optional] [default to undefined]
**canConnectWithAuthVendor** | **boolean** | Optional. Default is true. When set to false, the authorized user cannot authenticate through exchange networks such as Plaid. See Plaid Exchange for more information. | [optional] [default to undefined]

## Example

```typescript
import { AuthorizedUserType } from 'unit-openapi-node-sdk';

const instance: AuthorizedUserType = {
    fullName,
    email,
    phone,
    jwtSubject,
    canConnectWithAuthVendor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
