import { RootState, Person } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";
import { Context } from "@nuxt/vue-app";

export const state = (): RootState => ({
  people: []
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  }
}

export const actions: ActionTree<RootState, RootState> = {
  
}
