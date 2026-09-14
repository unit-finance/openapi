# unit_finance_sdk.CheckDepositsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_check_deposit**](CheckDepositsApi.md#clear_check_deposit) | **POST** /check-deposits/{checkDepositId}/clear | Clear a check deposit
[**confirm_check_deposit_details**](CheckDepositsApi.md#confirm_check_deposit_details) | **POST** /check-deposits/{checkDepositId}/confirm | Confirm check deposit details
[**create_check_deposit**](CheckDepositsApi.md#create_check_deposit) | **POST** /check-deposits | Create a check deposit
[**create_check_deposit_send_link**](CheckDepositsApi.md#create_check_deposit_send_link) | **POST** /white-label/send-link | Create a check deposit send link
[**get_check_deposit**](CheckDepositsApi.md#get_check_deposit) | **GET** /check-deposits/{checkDepositId} | Get a check deposit by id
[**get_check_deposit_back_image**](CheckDepositsApi.md#get_check_deposit_back_image) | **GET** /check-deposits/{checkDepositId}/back | Get a check deposit back image
[**get_check_deposit_front_image**](CheckDepositsApi.md#get_check_deposit_front_image) | **GET** /check-deposits/{checkDepositId}/front | Get a check deposit front image
[**list_check_deposits**](CheckDepositsApi.md#list_check_deposits) | **GET** /check-deposits | List check deposits
[**update_check_deposit**](CheckDepositsApi.md#update_check_deposit) | **PATCH** /check-deposits/{checkDepositId} | Update a check deposit
[**upload_check_deposit_back_image**](CheckDepositsApi.md#upload_check_deposit_back_image) | **PUT** /check-deposits/{checkDepositId}/back | Upload a check deposit back image
[**upload_check_deposit_front_image**](CheckDepositsApi.md#upload_check_deposit_front_image) | **PUT** /check-deposits/{checkDepositId}/front | Upload a check deposit front image


# **clear_check_deposit**
> CreateCheckDeposit201Response clear_check_deposit(check_deposit_id, body=body)

Clear a check deposit

Clears a check deposit while in `Clearing` status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_check_deposit201_response import CreateCheckDeposit201Response
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Clear a check deposit
        api_response = api_instance.clear_check_deposit(check_deposit_id, body=body)
        print("The response of CheckDepositsApi->clear_check_deposit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->clear_check_deposit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cleared check deposit. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirm_check_deposit_details**
> confirm_check_deposit_details(check_deposit_id, body=body)

Confirm check deposit details

Confirms a check deposit details when it's in `AwaitingCustomerConfirmation` status

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Confirm check deposit details
        api_instance.confirm_check_deposit_details(check_deposit_id, body=body)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->confirm_check_deposit_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The check deposit details were confirmed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_check_deposit**
> CreateCheckDeposit201Response create_check_deposit(create_check_deposit_request)

Create a check deposit

Creates a check deposit for an `Account`.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_check_deposit201_response import CreateCheckDeposit201Response
from unit_finance_sdk.models.create_check_deposit_request import CreateCheckDepositRequest
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    create_check_deposit_request = unit_finance_sdk.CreateCheckDepositRequest() # CreateCheckDepositRequest | 

    try:
        # Create a check deposit
        api_response = api_instance.create_check_deposit(create_check_deposit_request)
        print("The response of CheckDepositsApi->create_check_deposit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->create_check_deposit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_check_deposit_request** | [**CreateCheckDepositRequest**](CreateCheckDepositRequest.md)|  | 

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_check_deposit_send_link**
> CreateCheckDepositSendLink201Response create_check_deposit_send_link(create_check_deposit_send_link_request)

Create a check deposit send link

Creates a shareable link for the Check Deposit component for an `Account`. The link can be sent to an end user via SMS or email and used to complete a check deposit. Unless a White Label Theme is customized, the component uses the default theme. Unless an Email Domain is customized the link will be created under a default domain starting in `https://application-form.sh`.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_check_deposit_send_link201_response import CreateCheckDepositSendLink201Response
from unit_finance_sdk.models.create_check_deposit_send_link_request import CreateCheckDepositSendLinkRequest
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    create_check_deposit_send_link_request = unit_finance_sdk.CreateCheckDepositSendLinkRequest() # CreateCheckDepositSendLinkRequest | 

    try:
        # Create a check deposit send link
        api_response = api_instance.create_check_deposit_send_link(create_check_deposit_send_link_request)
        print("The response of CheckDepositsApi->create_check_deposit_send_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->create_check_deposit_send_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_check_deposit_send_link_request** | [**CreateCheckDepositSendLinkRequest**](CreateCheckDepositSendLinkRequest.md)|  | 

### Return type

[**CreateCheckDepositSendLink201Response**](CreateCheckDepositSendLink201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_check_deposit**
> GetCheckDeposit200Response get_check_deposit(check_deposit_id, include=include)

Get a check deposit by id

Get a check deposit by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_check_deposit200_response import GetCheckDeposit200Response
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional)

    try:
        # Get a check deposit by id
        api_response = api_instance.get_check_deposit(check_deposit_id, include=include)
        print("The response of CheckDepositsApi->get_check_deposit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->get_check_deposit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] 

### Return type

[**GetCheckDeposit200Response**](GetCheckDeposit200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CheckDeposit resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_check_deposit_back_image**
> bytes get_check_deposit_back_image(check_deposit_id)

Get a check deposit back image

Get a check deposit back image by check deposit id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 

    try:
        # Get a check deposit back image
        api_response = api_instance.get_check_deposit_back_image(check_deposit_id)
        print("The response of CheckDepositsApi->get_check_deposit_back_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->get_check_deposit_back_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The check deposit back image. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_check_deposit_front_image**
> bytes get_check_deposit_front_image(check_deposit_id)

Get a check deposit front image

Get a check deposit front image by check deposit id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 

    try:
        # Get a check deposit front image
        api_response = api_instance.get_check_deposit_front_image(check_deposit_id)
        print("The response of CheckDepositsApi->get_check_deposit_front_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->get_check_deposit_front_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The check deposit front image. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_check_deposits**
> ListCheckDeposits200Response list_check_deposits(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_tags=filter_tags, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, sort=sort, include=include)

List check deposits

List check deposit resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_check_deposits200_response import ListCheckDeposits200Response
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    page_limit = '100' # str | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]=PendingReview&filter[status][1]=AwaitingImages (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter check deposits by Tags. (optional)
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional)

    try:
        # List check deposits
        api_response = api_instance.list_check_deposits(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_tags=filter_tags, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, sort=sort, include=include)
        print("The response of CheckDepositsApi->list_check_deposits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->list_check_deposits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_status** | **str**| Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]&#x3D;PendingReview&amp;filter[status][1]&#x3D;AwaitingImages | [optional] 
 **filter_tags** | **str**| Optional. Filter check deposits by Tags. | [optional] 
 **filter_from_amount** | **str**| Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] 

### Return type

[**ListCheckDeposits200Response**](ListCheckDeposits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of check deposit resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_check_deposit**
> CreateCheckDeposit201Response update_check_deposit(check_deposit_id, update_check_deposit_request)

Update a check deposit

Update a check deposit.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_check_deposit201_response import CreateCheckDeposit201Response
from unit_finance_sdk.models.update_check_deposit_request import UpdateCheckDepositRequest
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 
    update_check_deposit_request = unit_finance_sdk.UpdateCheckDepositRequest() # UpdateCheckDepositRequest | 

    try:
        # Update a check deposit
        api_response = api_instance.update_check_deposit(check_deposit_id, update_check_deposit_request)
        print("The response of CheckDepositsApi->update_check_deposit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->update_check_deposit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 
 **update_check_deposit_request** | [**UpdateCheckDepositRequest**](UpdateCheckDepositRequest.md)|  | 

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated CheckDeposit resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_check_deposit_back_image**
> CreateCheckDeposit201Response upload_check_deposit_back_image(check_deposit_id, body)

Upload a check deposit back image

Uploads a check back-side image file. Currently only `jpeg` file type is supported.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_check_deposit201_response import CreateCheckDeposit201Response
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 
    body = None # bytes | 

    try:
        # Upload a check deposit back image
        api_response = api_instance.upload_check_deposit_back_image(check_deposit_id, body)
        print("The response of CheckDepositsApi->upload_check_deposit_back_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->upload_check_deposit_back_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 
 **body** | **bytes**|  | 

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: image/jpeg
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated CheckDeposit resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_check_deposit_front_image**
> CreateCheckDeposit201Response upload_check_deposit_front_image(check_deposit_id, body)

Upload a check deposit front image

Uploads a check front-side image file. Currently only `jpeg` file type is supported.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_check_deposit201_response import CreateCheckDeposit201Response
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
    api_instance = unit_finance_sdk.CheckDepositsApi(api_client)
    check_deposit_id = 'check_deposit_id_example' # str | 
    body = None # bytes | 

    try:
        # Upload a check deposit front image
        api_response = api_instance.upload_check_deposit_front_image(check_deposit_id, body)
        print("The response of CheckDepositsApi->upload_check_deposit_front_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDepositsApi->upload_check_deposit_front_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_deposit_id** | **str**|  | 
 **body** | **bytes**|  | 

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: image/jpeg
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated CheckDeposit resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

