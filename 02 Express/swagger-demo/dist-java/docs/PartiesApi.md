# PartiesApi

All URIs are relative to *http://localhost:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listParties**](PartiesApi.md#listParties) | **GET** /parties | List all parties


<a name="listParties"></a>
# **listParties**
> List&lt;Party&gt; listParties()

List all parties

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:5000/api");

    PartiesApi apiInstance = new PartiesApi(defaultClient);
    try {
      List<Party> result = apiInstance.listParties();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PartiesApi#listParties");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Party&gt;**](Party.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of parties |  -  |
**0** | unexpected error |  -  |

