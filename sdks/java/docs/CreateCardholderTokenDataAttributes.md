

# CreateCardholderTokenDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**scope** | **String** | list of Scopes separated by spaces. Only cards (cards cards-sensitive cards-write cards-sensitive-write) scopes are allowed. |  |
|**verificationToken** | **String** | Required if scope includes a scope which requires two-factor authentication. Received as a response from Create Cardholder Token Verification. |  |
|**verificationCode** | **String** | Required if scope includes a scope which requires two-factor authentication. 6 digit code sent to the card holder through the desired channel. |  |
|**expiresIn** | **Integer** | The lifetime of the token (in seconds). Maximum value is 86400 (24 hours). Default value is also 24 hours. |  [optional] |
|**upgradableScope** | **String** | list of Scopes separated by spaces. The card holder will be able to upgrade the token to the scopes you provide here. |  [optional] |



