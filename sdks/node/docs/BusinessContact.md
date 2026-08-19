# BusinessContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | [**FullName**](FullName.md) | Full name of the contact. | [default to undefined]
**email** | **string** | The contact\&#39;s email address. | [default to undefined]
**phone** | [**Phone**](Phone.md) | The contact\&#39;s phone number. | [default to undefined]
**jwtSubject** | **string** | Optional. See this section for more information. | [optional] [default to undefined]

## Example

```typescript
import { BusinessContact } from '@unit-finance/unit-node-sdk';

const instance: BusinessContact = {
    fullName,
    email,
    phone,
    jwtSubject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
