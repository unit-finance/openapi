# CreateBusinessWalletCustomer201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BusinessWalletCustomer**](BusinessWalletCustomer.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_wallet_customer201_response import CreateBusinessWalletCustomer201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessWalletCustomer201Response from a JSON string
create_business_wallet_customer201_response_instance = CreateBusinessWalletCustomer201Response.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessWalletCustomer201Response.to_json())

# convert the object into a dict
create_business_wallet_customer201_response_dict = create_business_wallet_customer201_response_instance.to_dict()
# create an instance of CreateBusinessWalletCustomer201Response from a dict
create_business_wallet_customer201_response_from_dict = CreateBusinessWalletCustomer201Response.from_dict(create_business_wallet_customer201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


