# unit_finance_sdk.FeesApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_fee**](FeesApi.md#create_fee) | **POST** /fees | Create a fee
[**reverse_fee**](FeesApi.md#reverse_fee) | **POST** /fees/reverse | Reverse a fee


# **create_fee**
> CreateFee201Response create_fee(create_fee_request)

Create a fee

Creates a fee for an `Account`.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_fee201_response import CreateFee201Response
from unit_finance_sdk.models.create_fee_request import CreateFeeRequest
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
    api_instance = unit_finance_sdk.FeesApi(api_client)
    create_fee_request = unit_finance_sdk.CreateFeeRequest() # CreateFeeRequest | 

    try:
        # Create a fee
        api_response = api_instance.create_fee(create_fee_request)
        print("The response of FeesApi->create_fee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeesApi->create_fee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_fee_request** | [**CreateFeeRequest**](CreateFeeRequest.md)|  | 

### Return type

[**CreateFee201Response**](CreateFee201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created fee resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reverse_fee**
> ReverseFee201Response reverse_fee(reverse_fee_request)

Reverse a fee

Reverse a fee for an `Account`.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.reverse_fee201_response import ReverseFee201Response
from unit_finance_sdk.models.reverse_fee_request import ReverseFeeRequest
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
    api_instance = unit_finance_sdk.FeesApi(api_client)
    reverse_fee_request = unit_finance_sdk.ReverseFeeRequest() # ReverseFeeRequest | 

    try:
        # Reverse a fee
        api_response = api_instance.reverse_fee(reverse_fee_request)
        print("The response of FeesApi->reverse_fee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeesApi->reverse_fee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reverse_fee_request** | [**ReverseFeeRequest**](ReverseFeeRequest.md)|  | 

### Return type

[**ReverseFee201Response**](ReverseFee201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created fee reversal resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

