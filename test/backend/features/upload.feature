Feature: upload a file
  upload a file in the server
  */
  Scenario: uploading a file to the server
    Given I send a POST request to "/upload" with a jpg file
    Then the response status should be 202