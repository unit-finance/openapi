# BusinessWalletCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessWalletCustomerAttributes**](BusinessWalletCustomerAttributes.md) |  | 
**relationships** | [**BusinessWalletCustomerRelationships**](BusinessWalletCustomerRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_wallet_customer import BusinessWalletCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessWalletCustomer from a JSON string
business_wallet_customer_instance = BusinessWalletCustomer.from_json(json)
# print the JSON string representation of the object
print(BusinessWalletCustomer.to_json())

# convert the object into a dict
business_wallet_customer_dict = business_wallet_customer_instance.to_dict()
# create an instance of BusinessWalletCustomer from a dict
business_wallet_customer_from_dict = BusinessWalletCustomer.from_dict(business_wallet_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


