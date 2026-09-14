# CreateBusinessWalletCustomerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBusinessWalletCustomerData**](CreateBusinessWalletCustomerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_wallet_customer_request import CreateBusinessWalletCustomerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessWalletCustomerRequest from a JSON string
create_business_wallet_customer_request_instance = CreateBusinessWalletCustomerRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessWalletCustomerRequest.to_json())

# convert the object into a dict
create_business_wallet_customer_request_dict = create_business_wallet_customer_request_instance.to_dict()
# create an instance of CreateBusinessWalletCustomerRequest from a dict
create_business_wallet_customer_request_from_dict = CreateBusinessWalletCustomerRequest.from_dict(create_business_wallet_customer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


