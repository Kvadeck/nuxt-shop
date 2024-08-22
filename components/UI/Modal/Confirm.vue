<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'

defineProps<{
  isOpened: boolean
}>()

defineEmits<{
  result: [value: boolean]
  closeModal: [value: null]
}>()
</script>

<template>
  <Dialog :open="isOpened" class="relative z-10">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75" />
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto" @click="$emit('closeModal')">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationCircleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                  Удалить продукт
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Вы уверены что хотите удалить этот продукт из корзины?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="$emit('result', true)">
              Да, удалить
            </button>
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="$emit('result', false)">
              Нет, подумаю
            </button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>
