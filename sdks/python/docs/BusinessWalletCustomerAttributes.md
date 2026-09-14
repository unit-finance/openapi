# BusinessWalletCustomerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**bank_name** | **str** | The name of the bank partner this customer is about to create a wallet under. | 
**business_name** | **str** | The name of the business this customer represents. | 
**name** | **str** | The official name. | 
**address** | [**AddressType**](AddressType.md) | Address of the business. | 
**ein** | **str** | Business EIN (numbers only). | 
**business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. | 
**number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | The number of employees working for this business. | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.business_wallet_customer_attributes import BusinessWalletCustomerAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessWalletCustomerAttributes from a JSON string
business_wallet_customer_attributes_instance = BusinessWalletCustomerAttributes.from_json(json)
# print the JSON string representation of the object
print(BusinessWalletCustomerAttributes.to_json())

# convert the object into a dict
business_wallet_customer_attributes_dict = business_wallet_customer_attributes_instance.to_dict()
# create an instance of BusinessWalletCustomerAttributes from a dict
business_wallet_customer_attributes_from_dict = BusinessWalletCustomerAttributes.from_dict(business_wallet_customer_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


