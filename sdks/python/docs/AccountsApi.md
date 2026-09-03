# unit_finance_sdk.AccountsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_account_owners**](AccountsApi.md#add_account_owners) | **POST** /accounts/{accountId}/relationships/customers | Add account owners
[**close_account**](AccountsApi.md#close_account) | **POST** /accounts/{accountId}/close | Close an account
[**create_account**](AccountsApi.md#create_account) | **POST** /accounts | Create an account
[**create_account_hold**](AccountsApi.md#create_account_hold) | **POST** /account-holds | Create an account hold
[**freeze_account**](AccountsApi.md#freeze_account) | **POST** /accounts/{accountId}/freeze | Freeze an account
[**get_account**](AccountsApi.md#get_account) | **GET** /accounts/{accountId} | Get an account by id
[**get_account_balance_history**](AccountsApi.md#get_account_balance_history) | **GET** /account-end-of-day | List account end-of-day balances
[**get_account_hold_by_id**](AccountsApi.md#get_account_hold_by_id) | **GET** /account-holds/{id} | Get an account hold by id
[**get_account_limits**](AccountsApi.md#get_account_limits) | **GET** /accounts/{accountId}/limits | Get account limits
[**get_available_deposit_products**](AccountsApi.md#get_available_deposit_products) | **GET** /accounts/{accountId}/deposit-products | Get available deposit products
[**list_account_holds**](AccountsApi.md#list_account_holds) | **GET** /account-holds | List account holds
[**list_accounts**](AccountsApi.md#list_accounts) | **GET** /accounts | List accounts
[**release_account_hold**](AccountsApi.md#release_account_hold) | **POST** /account-holds/{id}/release | Release an account hold
[**remove_account_owners**](AccountsApi.md#remove_account_owners) | **DELETE** /accounts/{accountId}/relationships/customers | Remove account owners
[**reopen_account**](AccountsApi.md#reopen_account) | **POST** /accounts/{accountId}/reopen | Reopen an account
[**unfreeze_account**](AccountsApi.md#unfreeze_account) | **POST** /accounts/{accountId}/unfreeze | Unfreeze an account
[**update_account**](AccountsApi.md#update_account) | **PATCH** /accounts/{accountId} | Update an account


# **add_account_owners**
> AddAccountOwners200Response add_account_owners(account_id, add_account_owners_request)

Add account owners

Add owner or owners to an existing deposit account.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.add_account_owners200_response import AddAccountOwners200Response
from unit_finance_sdk.models.add_account_owners_request import AddAccountOwnersRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    add_account_owners_request = unit_finance_sdk.AddAccountOwnersRequest() # AddAccountOwnersRequest | 

    try:
        # Add account owners
        api_response = api_instance.add_account_owners(account_id, add_account_owners_request)
        print("The response of AccountsApi->add_account_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->add_account_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **add_account_owners_request** | [**AddAccountOwnersRequest**](AddAccountOwnersRequest.md)|  | 

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated deposit account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **close_account**
> CreateAccount201Response close_account(account_id, close_account_request)

Close an account

Closes an account. Closing an account is irreversible and can only be done by an Org user. An account.closed event is raised when the call was successful. The request body is one of CloseDepositAccountRequest, CloseCreditAccountRequest, or CloseWalletRequest.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.close_account_request import CloseAccountRequest
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    close_account_request = unit_finance_sdk.CloseAccountRequest() # CloseAccountRequest | 

    try:
        # Close an account
        api_response = api_instance.close_account(account_id, close_account_request)
        print("The response of AccountsApi->close_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->close_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **close_account_request** | [**CloseAccountRequest**](CloseAccountRequest.md)|  | 

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The closed account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_account**
> CreateAccount201Response create_account(create_account_request)

Create an account

Creates an account. The request body is one of CreateDepositAccountRequest, CreateCreditAccountRequest, or CreateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response
from unit_finance_sdk.models.create_account_request import CreateAccountRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    create_account_request = unit_finance_sdk.CreateAccountRequest() # CreateAccountRequest | 

    try:
        # Create an account
        api_response = api_instance.create_account(create_account_request)
        print("The response of AccountsApi->create_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->create_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_account_request** | [**CreateAccountRequest**](CreateAccountRequest.md)|  | 

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_account_hold**
> CreateAccountHold201Response create_account_hold(create_account_hold_request)

Create an account hold

Create an account hold resource.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account_hold201_response import CreateAccountHold201Response
from unit_finance_sdk.models.create_account_hold_request import CreateAccountHoldRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    create_account_hold_request = unit_finance_sdk.CreateAccountHoldRequest() # CreateAccountHoldRequest | 

    try:
        # Create an account hold
        api_response = api_instance.create_account_hold(create_account_hold_request)
        print("The response of AccountsApi->create_account_hold:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->create_account_hold: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_account_hold_request** | [**CreateAccountHoldRequest**](CreateAccountHoldRequest.md)|  | 

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created AccountHold resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **freeze_account**
> CreateAccount201Response freeze_account(account_id, freeze_account_request)

Freeze an account

Freezes an account. An account.frozen event is raised when the call was successful. A frozen account behaves like a closed account, with the primary difference being that a frozen state should be temporary. The request body is one of FreezeDepositAccountRequest, FreezeCreditAccountRequest, or FreezeWalletRequest.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response
from unit_finance_sdk.models.freeze_account_request import FreezeAccountRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    freeze_account_request = unit_finance_sdk.FreezeAccountRequest() # FreezeAccountRequest | 

    try:
        # Freeze an account
        api_response = api_instance.freeze_account(account_id, freeze_account_request)
        print("The response of AccountsApi->freeze_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->freeze_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **freeze_account_request** | [**FreezeAccountRequest**](FreezeAccountRequest.md)|  | 

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The frozen account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_account**
> CreateAccount201Response get_account(account_id, include=include, extra_fields_account=extra_fields_account)

Get an account by id

Get an account resource (deposit account, credit account, or wallet) by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    include = 'include_example' # str | Optional. Related resource available to include: customer. See Getting Related Resources (optional)
    extra_fields_account = 'extra_fields_account_example' # str | Optional. Use extraFields[account]=interestTerms to include the interestTerms object in the account's attributes section of the response. (optional)

    try:
        # Get an account by id
        api_response = api_instance.get_account(account_id, include=include, extra_fields_account=extra_fields_account)
        print("The response of AccountsApi->get_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **include** | **str**| Optional. Related resource available to include: customer. See Getting Related Resources | [optional] 
 **extra_fields_account** | **str**| Optional. Use extraFields[account]&#x3D;interestTerms to include the interestTerms object in the account&#39;s attributes section of the response. | [optional] 

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_account_balance_history**
> GetAccountBalanceHistory200Response get_account_balance_history(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_since=filter_since, filter_until=filter_until)

List account end-of-day balances

List account end-of-day balances history (filtering and paging can be applied).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_account_balance_history200_response import GetAccountBalanceHistory200Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. At least one of accountId and customerId is required. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required. (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01 (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01 (optional)

    try:
        # List account end-of-day balances
        api_response = api_instance.get_account_balance_history(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_since=filter_since, filter_until=filter_until)
        print("The response of AccountsApi->get_account_balance_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_account_balance_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. At least one of accountId and customerId is required. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required. | [optional] 
 **filter_since** | **str**| Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01 | [optional] 
 **filter_until** | **str**| Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01 | [optional] 

### Return type

[**GetAccountBalanceHistory200Response**](GetAccountBalanceHistory200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of account end-of-day resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_account_hold_by_id**
> CreateAccountHold201Response get_account_hold_by_id(id)

Get an account hold by id

Get an account hold resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account_hold201_response import CreateAccountHold201Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get an account hold by id
        api_response = api_instance.get_account_hold_by_id(id)
        print("The response of AccountsApi->get_account_hold_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_account_hold_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The AccountHold resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_account_limits**
> GetAccountLimits200Response get_account_limits(account_id)

Get account limits

Get the limits of an account (deposit account, credit account, or wallet).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_account_limits200_response import GetAccountLimits200Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 

    try:
        # Get account limits
        api_response = api_instance.get_account_limits(account_id)
        print("The response of AccountsApi->get_account_limits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_account_limits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 

### Return type

[**GetAccountLimits200Response**](GetAccountLimits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The account limits resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_available_deposit_products**
> GetAvailableDepositProducts200Response get_available_deposit_products(account_id)

Get available deposit products

Get the deposit products available for an account.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_available_deposit_products200_response import GetAvailableDepositProducts200Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 

    try:
        # Get available deposit products
        api_response = api_instance.get_available_deposit_products(account_id)
        print("The response of AccountsApi->get_available_deposit_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_available_deposit_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 

### Return type

[**GetAvailableDepositProducts200Response**](GetAvailableDepositProducts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of available deposit products. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_account_holds**
> ListAccountHolds200Response list_account_holds(page_limit=page_limit, page_offset=page_offset, filter_status=filter_status, filter_expired_at=filter_expired_at)

List account holds

List account hold resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_account_holds200_response import ListAccountHolds200Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_status = 'filter_status_example' # str | Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased. (optional)
    filter_expired_at = 'filter_expired_at_example' # str | Optional. Date only (e.g. \"2001-08-15\"). the date the account hold will be automatically released at. (optional)

    try:
        # List account holds
        api_response = api_instance.list_account_holds(page_limit=page_limit, page_offset=page_offset, filter_status=filter_status, filter_expired_at=filter_expired_at)
        print("The response of AccountsApi->list_account_holds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->list_account_holds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_status** | **str**| Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased. | [optional] 
 **filter_expired_at** | **str**| Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | [optional] 

### Return type

[**ListAccountHolds200Response**](ListAccountHolds200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of account hold resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_accounts**
> ListAccounts200Response list_accounts(page_limit=page_limit, page_offset=page_offset, filter_customer_id=filter_customer_id, filter_deposit_product_id=filter_deposit_product_id, filter_tags=filter_tags, filter_status=filter_status, filter_from_balance=filter_from_balance, filter_to_balance=filter_to_balance, include=include)

List accounts

List account resources (deposit accounts, credit accounts, and wallets). Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_accounts200_response import ListAccounts200Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_deposit_product_id = 'filter_deposit_product_id_example' # str | Optional. Filters the results by the specified deposit product id. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter Accounts by Tags. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter Account by its status (Open, Frozen, or Closed). Usage example: filter[status][0]=Closed (optional)
    filter_from_balance = 'filter_from_balance_example' # str | Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000 (optional)
    filter_to_balance = 'filter_to_balance_example' # str | Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000 (optional)
    include = 'include_example' # str | Optional. Related resource available to include: customer. See Getting Related Resources (optional)

    try:
        # List accounts
        api_response = api_instance.list_accounts(page_limit=page_limit, page_offset=page_offset, filter_customer_id=filter_customer_id, filter_deposit_product_id=filter_deposit_product_id, filter_tags=filter_tags, filter_status=filter_status, filter_from_balance=filter_from_balance, filter_to_balance=filter_to_balance, include=include)
        print("The response of AccountsApi->list_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->list_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_deposit_product_id** | **str**| Optional. Filters the results by the specified deposit product id. | [optional] 
 **filter_tags** | **str**| Optional. Filter Accounts by Tags. | [optional] 
 **filter_status** | **str**| Optional. Filter Account by its status (Open, Frozen, or Closed). Usage example: filter[status][0]&#x3D;Closed | [optional] 
 **filter_from_balance** | **str**| Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_balance** | **str**| Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000 | [optional] 
 **include** | **str**| Optional. Related resource available to include: customer. See Getting Related Resources | [optional] 

### Return type

[**ListAccounts200Response**](ListAccounts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of account resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **release_account_hold**
> CreateAccountHold201Response release_account_hold(id, release_account_hold_request)

Release an account hold

You can release an account hold fully (entire amount) or partially (a specified amount).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account_hold201_response import CreateAccountHold201Response
from unit_finance_sdk.models.release_account_hold_request import ReleaseAccountHoldRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    id = 'id_example' # str | 
    release_account_hold_request = unit_finance_sdk.ReleaseAccountHoldRequest() # ReleaseAccountHoldRequest | 

    try:
        # Release an account hold
        api_response = api_instance.release_account_hold(id, release_account_hold_request)
        print("The response of AccountsApi->release_account_hold:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->release_account_hold: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **release_account_hold_request** | [**ReleaseAccountHoldRequest**](ReleaseAccountHoldRequest.md)|  | 

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The released AccountHold resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_account_owners**
> AddAccountOwners200Response remove_account_owners(account_id, remove_account_owners_request)

Remove account owners

Remove owner or owners from an existing joint deposit account.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.add_account_owners200_response import AddAccountOwners200Response
from unit_finance_sdk.models.remove_account_owners_request import RemoveAccountOwnersRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    remove_account_owners_request = unit_finance_sdk.RemoveAccountOwnersRequest() # RemoveAccountOwnersRequest | 

    try:
        # Remove account owners
        api_response = api_instance.remove_account_owners(account_id, remove_account_owners_request)
        print("The response of AccountsApi->remove_account_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->remove_account_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **remove_account_owners_request** | [**RemoveAccountOwnersRequest**](RemoveAccountOwnersRequest.md)|  | 

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated deposit account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reopen_account**
> ReopenAccount200Response reopen_account(account_id)

Reopen an account

Reopens a closed account. Applies to deposit accounts and wallets.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.reopen_account200_response import ReopenAccount200Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 

    try:
        # Reopen an account
        api_response = api_instance.reopen_account(account_id)
        print("The response of AccountsApi->reopen_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->reopen_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 

### Return type

[**ReopenAccount200Response**](ReopenAccount200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reopened account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfreeze_account**
> CreateAccount201Response unfreeze_account(account_id)

Unfreeze an account

Unfreezes an account.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 

    try:
        # Unfreeze an account
        api_response = api_instance.unfreeze_account(account_id)
        print("The response of AccountsApi->unfreeze_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->unfreeze_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The unfrozen account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_account**
> CreateAccount201Response update_account(account_id, update_account_request)

Update an account

Update an account. The request body is one of UpdateDepositAccountRequest, UpdateCreditAccountRequest, or UpdateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response
from unit_finance_sdk.models.update_account_request import UpdateAccountRequest
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
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    update_account_request = unit_finance_sdk.UpdateAccountRequest() # UpdateAccountRequest | 

    try:
        # Update an account
        api_response = api_instance.update_account(account_id, update_account_request)
        print("The response of AccountsApi->update_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->update_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **update_account_request** | [**UpdateAccountRequest**](UpdateAccountRequest.md)|  | 

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

