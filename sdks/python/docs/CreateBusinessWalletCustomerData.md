# CreateBusinessWalletCustomerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateBusinessWalletCustomerDataAttributes**](CreateBusinessWalletCustomerDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_wallet_customer_data import CreateBusinessWalletCustomerData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessWalletCustomerData from a JSON string
create_business_wallet_customer_data_instance = CreateBusinessWalletCustomerData.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessWalletCustomerData.to_json())

# convert the object into a dict
create_business_wallet_customer_data_dict = create_business_wallet_customer_data_instance.to_dict()
# create an instance of CreateBusinessWalletCustomerData from a dict
create_business_wallet_customer_data_from_dict = CreateBusinessWalletCustomerData.from_dict(create_business_wallet_customer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


