

# AuthorizedUserType


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fullName** | [**FullNameType**](FullNameType.md) | Full name of the authorized user. |  |
|**email** | **String** | The authorized user&#39;s email address. |  |
|**phone** | [**PhoneType**](PhoneType.md) | The authorized user&#39;s phone number. This number will be used for One Time Password (OTP) authentication. |  |
|**jwtSubject** | **String** | Optional. See this section for more information. |  [optional] |
|**canConnectWithAuthVendor** | **Boolean** | Optional. Default is true. When set to false, the authorized user cannot authenticate through exchange networks such as Plaid. See Plaid Exchange for more information. |  [optional] |



