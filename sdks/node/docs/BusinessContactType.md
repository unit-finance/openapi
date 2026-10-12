# BusinessContactType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the contact. | [default to undefined]
**email** | **string** | The contact\&#39;s email address. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | The contact\&#39;s phone number. | [default to undefined]
**jwtSubject** | **string** | Optional. See this section for more information. | [optional] [default to undefined]

## Example

```typescript
import { BusinessContactType } from 'unit-openapi-node-sdk';

const instance: BusinessContactType = {
    fullName,
    email,
    phone,
    jwtSubject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
