import { ClipboardCopyIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import copy from 'copy-text-to-clipboard';

export default function Withdrawtable({ id, amount }) {
  const [value, setValue] = useState(
    '0x0d43f98A413eDEb121B888E2519d4694fA4A047F'
  );
  const [status, setStatus] = useState(false);

  return (

              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">{id}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-row y-1 justify-start px-10 items-center space-x-4">
                      <p class="text-gray-900  text-base ">{value}</p>
                      <div className="bg-gray3 hover:bg-fteal transform transution duration-300 ease-out1 rounded-lg px-1 py-1">
                        <ClipboardCopyIcon
                          className="h-7 text-gray1 "
                          onClick={() => copy(value.toString())}
                        />
                      </div>
                    </div>
                  </td>

                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap font-angkor">
                      {amount}
                    </p>
                  </td>
                  <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                    <button
                      href=""
                      class="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4 mb-10"
                      onClick={() => router.push('/login')}
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              </tbody>

  );
}
