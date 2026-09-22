# unit_finance_sdk.CardHolderAPITokensApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_cardholder_token**](CardHolderAPITokensApi.md#create_cardholder_token) | **POST** /cards/{cardId}/cardholder/token | Create a cardholder token
[**create_cardholder_token_verification**](CardHolderAPITokensApi.md#create_cardholder_token_verification) | **POST** /cards/{cardId}/cardholder/token/verification | Create a cardholder token verification


# **create_cardholder_token**
> CreateCardholderToken201Response create_cardholder_token(card_id, create_cardholder_token_request)

Create a cardholder token

Create a bearer token for a specific card.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_cardholder_token201_response import CreateCardholderToken201Response
from unit_finance_sdk.models.create_cardholder_token_request import CreateCardholderTokenRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.CardHolderAPITokensApi(api_client)
    card_id = 'card_id_example' # str | 
    create_cardholder_token_request = unit_finance_sdk.CreateCardholderTokenRequest() # CreateCardholderTokenRequest | 

    try:
        # Create a cardholder token
        api_response = api_instance.create_cardholder_token(card_id, create_cardholder_token_request)
        print("The response of CardHolderAPITokensApi->create_cardholder_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardHolderAPITokensApi->create_cardholder_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**|  | 
 **create_cardholder_token_request** | [**CreateCardholderTokenRequest**](CreateCardholderTokenRequest.md)|  | 

### Return type

[**CreateCardholderToken201Response**](CreateCardholderToken201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created cardholder token. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_cardholder_token_verification**
> CreateCardholderTokenVerification201Response create_cardholder_token_verification(card_id, create_cardholder_token_verification_request)

Create a cardholder token verification

When creating a cardholder token that contains a scope which requires two-factor authentication (see Scopes), it is required to first create a verification challenge that will be sent to the customer.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_cardholder_token_verification201_response import CreateCardholderTokenVerification201Response
from unit_finance_sdk.models.create_cardholder_token_verification_request import CreateCardholderTokenVerificationRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.CardHolderAPITokensApi(api_client)
    card_id = 'card_id_example' # str | 
    create_cardholder_token_verification_request = unit_finance_sdk.CreateCardholderTokenVerificationRequest() # CreateCardholderTokenVerificationRequest | 

    try:
        # Create a cardholder token verification
        api_response = api_instance.create_cardholder_token_verification(card_id, create_cardholder_token_verification_request)
        print("The response of CardHolderAPITokensApi->create_cardholder_token_verification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardHolderAPITokensApi->create_cardholder_token_verification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**|  | 
 **create_cardholder_token_verification_request** | [**CreateCardholderTokenVerificationRequest**](CreateCardholderTokenVerificationRequest.md)|  | 

### Return type

[**CreateCardholderTokenVerification201Response**](CreateCardholderTokenVerification201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created cardholder token verification. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

