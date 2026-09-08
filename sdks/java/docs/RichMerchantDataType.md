

# RichMerchantDataType


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Name of the merchant. |  |
|**website** | **String** | URL of the merchant&#39;s website. |  [optional] |
|**logo** | **String** | URL of the merchant&#39;s logo. |  [optional] |
|**phone** | **String** | Phone number of the merchant. |  [optional] |
|**categories** | [**List&lt;RichMerchantDataTypeCategoriesInner&gt;**](RichMerchantDataTypeCategoriesInner.md) | Array of categories the merchant belongs to (from the least specific to the most specific). |  [optional] |
|**address** | [**RichMerchantDataTypeAddress**](RichMerchantDataTypeAddress.md) |  |  [optional] |
|**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the merchant. |  [optional] |
|**facilitators** | **List&lt;Map&lt;String, Object&gt;&gt;** | The transaction facilitators. |  [optional] |



