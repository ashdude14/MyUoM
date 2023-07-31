/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import { Accordion, Box, Text, VStack } from "@chakra-ui/react";
import FAQCard from "../components/FAQCard";
import data from "../assets/data/questionsForFAQ";
import i18n from "../i18n";

export default function FAQSettingsPage() {
  return (
    <Box textAlign={"center"}>
      <Box textAlign="center" marginBottom="1em">
        <Text
          as="h1"
          fontSize="3.5ch"
          fontWeight="bold"
          marginBottom="1em"
          paddingTop="10px"
          fontFamily="Syne"
        >
          {i18n.t("faq_title")}
        </Text>
        <Text padding="15px" fontFamily="Syne">
          {i18n.t("faq_subtitle")}
        </Text>
      </Box>
      <Accordion allowToggle>
        {data.map((data) => {
          return <FAQCard data={data} key={data.question} />;
        })}
      </Accordion>
    </Box>
  );
}
