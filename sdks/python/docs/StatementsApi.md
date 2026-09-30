# unit_finance_sdk.StatementsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_bank_verification_pdf**](StatementsApi.md#get_bank_verification_pdf) | **GET** /statements/{accountId}/bank/pdf | Get a bank verification PDF
[**get_statement_html**](StatementsApi.md#get_statement_html) | **GET** /statements/{id}/html | Get a statement HTML
[**get_statement_pdf**](StatementsApi.md#get_statement_pdf) | **GET** /statements/{id}/pdf | Get a statement PDF
[**list_statements**](StatementsApi.md#list_statements) | **GET** /statements | List statements


# **get_bank_verification_pdf**
> bytes get_bank_verification_pdf(account_id, include_proof_of_funds=include_proof_of_funds)

Get a bank verification PDF

Customers may be required, for various reasons, to provide proof that they hold a bank account with a certain financial institution. This is typically provided by the bank in a letter called "Bank verification letter", which includes the customer, account and financial institution information. If the customer is required to prove availability of funds, the letter may also include the available balance on the account.

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
    api_instance = unit_finance_sdk.StatementsApi(api_client)
    account_id = 'account_id_example' # str | 
    include_proof_of_funds = 'false' # str | Optional. include customer proof of funds (optional) (default to 'false')

    try:
        # Get a bank verification PDF
        api_response = api_instance.get_bank_verification_pdf(account_id, include_proof_of_funds=include_proof_of_funds)
        print("The response of StatementsApi->get_bank_verification_pdf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatementsApi->get_bank_verification_pdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **include_proof_of_funds** | **str**| Optional. include customer proof of funds | [optional] [default to &#39;false&#39;]

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The bank verification letter PDF. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_statement_html**
> str get_statement_html(id, filter_customer_id=filter_customer_id, language=language)

Get a statement HTML

Get a statement HTML output by id.

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
    api_instance = unit_finance_sdk.StatementsApi(api_client)
    id = 'id_example' # str | 
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Verify that the statements belongs to the customer. (optional)
    language = 'en' # str | Optional. Select the statement language. en - English, es - Spanish (optional) (default to 'en')

    try:
        # Get a statement HTML
        api_response = api_instance.get_statement_html(id, filter_customer_id=filter_customer_id, language=language)
        print("The response of StatementsApi->get_statement_html:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatementsApi->get_statement_html: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **filter_customer_id** | **str**| Optional. Verify that the statements belongs to the customer. | [optional] 
 **language** | **str**| Optional. Select the statement language. en - English, es - Spanish | [optional] [default to &#39;en&#39;]

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The statement HTML output. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_statement_pdf**
> bytes get_statement_pdf(id, filter_customer_id=filter_customer_id, language=language)

Get a statement PDF

Get a statement PDF output by id.

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
    api_instance = unit_finance_sdk.StatementsApi(api_client)
    id = 'id_example' # str | 
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Verify that the statements belongs to the customer. (optional)
    language = 'en' # str | Optional. Select the statement language. en - English, es - Spanish (optional) (default to 'en')

    try:
        # Get a statement PDF
        api_response = api_instance.get_statement_pdf(id, filter_customer_id=filter_customer_id, language=language)
        print("The response of StatementsApi->get_statement_pdf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatementsApi->get_statement_pdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **filter_customer_id** | **str**| Optional. Verify that the statements belongs to the customer. | [optional] 
 **language** | **str**| Optional. Select the statement language. en - English, es - Spanish | [optional] [default to &#39;en&#39;]

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The statement PDF output. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_statements**
> ListStatements200Response list_statements(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_account_ids=filter_account_ids, filter_customer_id=filter_customer_id, filter_period=filter_period, sort=sort)

List statements

List statement resources. Filtering and paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_statements200_response import ListStatements200Response
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
    api_instance = unit_finance_sdk.StatementsApi(api_client)
    page_limit = '100' # str | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_account_ids = 'filter_account_ids_example' # str | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001* (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_period = 'filter_period_example' # str | Optional. Filters the results for a specific month. e.g. 2021-01 (optional)
    sort = 'period' # str | Optional. Leave empty or provide sort=period for ascending order. Provide sort=-period (leading minus sign) for descending order. (optional) (default to 'period')

    try:
        # List statements
        api_response = api_instance.list_statements(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_account_ids=filter_account_ids, filter_customer_id=filter_customer_id, filter_period=filter_period, sort=sort)
        print("The response of StatementsApi->list_statements:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatementsApi->list_statements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_account_ids** | **str**| Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_period** | **str**| Optional. Filters the results for a specific month. e.g. 2021-01 | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;period for ascending order. Provide sort&#x3D;-period (leading minus sign) for descending order. | [optional] [default to &#39;period&#39;]

### Return type

[**ListStatements200Response**](ListStatements200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of statement resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

