<script setup lang="ts">
import { queryOptions, useQuery } from '@tanstack/vue-query';
import { COLLECTION_CUSTOMERS, DB_ID } from '~/app.constants';
import type { ICustomer } from '~/types/deals.types';

useSeoMeta ({
    title: 'Customers || CRM system'
})


const {data, isLoading} = useQuery({
    queryKey: ['customers'],
    queryFn: () => { DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS)

    }
})         

const customers = (data?.value?.documents as unknown as ICustomer[])
</script>

<template>

    <div class='p-10'>
    <h1 class="font-bold text-2xl mb-10">Our clients</h1>
    <div v-if="isLoading">Loading</div>
    <UiTable  v-else>
        <UiTableHeader>
            <UiTableRow>
                <UiTableHead class="w-[80px]">
                    image
                </UiTableHead>
                <UiTableHead class="w-[200px]">
                    Name
                </UiTableHead>
                <UiTableHead class="w-200px]">
                    Email
                </UiTableHead>
                <UiTableHead >
                    From Where
                </UiTableHead>
            </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
            <UiTableRow v-for="customer in customers" :key="customer.$id">
                
                <UiTableCell>
                    <NuxtLink :href="`/customers/edit/${customer.$id}`">
                        <img :src="customer.avatar_url"
                        :alt="customer.name"
                        width="50"
                        height="50"
                        class="rounded-full"/>
                    </NuxtLink>
                </UiTableCell>
                <UiTableCell class="font-medium">
                    {{ customer.name }}
                </UiTableCell>
                <UiTableCell >
                    {{ customer.email }}
                </UiTableCell>
                <UiTableCell >
                    {{ customer.from_source }}
                </UiTableCell>
            </UiTableRow>
        </UiTableBody>

    </UiTable>
        
    </div>
</template>