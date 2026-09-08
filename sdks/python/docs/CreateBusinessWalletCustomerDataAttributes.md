# CreateBusinessWalletCustomerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **str** | The name of the bank partner this customer is about to create a wallet under. | 
**business_name** | **str** | The name of the business this customer represents. | 
**address** | [**AddressType**](AddressType.md) | Address of the business. | 
**ein** | **str** | Business EIN (numbers only). | 
**business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | 
**number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | The number of employees working for this business. | 
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_business_wallet_customer_data_attributes import CreateBusinessWalletCustomerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessWalletCustomerDataAttributes from a JSON string
create_business_wallet_customer_data_attributes_instance = CreateBusinessWalletCustomerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessWalletCustomerDataAttributes.to_json())

# convert the object into a dict
create_business_wallet_customer_data_attributes_dict = create_business_wallet_customer_data_attributes_instance.to_dict()
# create an instance of CreateBusinessWalletCustomerDataAttributes from a dict
create_business_wallet_customer_data_attributes_from_dict = CreateBusinessWalletCustomerDataAttributes.from_dict(create_business_wallet_customer_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


