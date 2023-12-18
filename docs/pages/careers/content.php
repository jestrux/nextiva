<div class="mt-8">
	<section class="py-20" x-data="careers" x-on:location-changed="location = $event.detail.value" x-on:locationtype-changed="locationType = $event.detail.value" x-on:team-changed="team = $event.detail.value">
		<div class="max-w-6xl mx-auto">
			<div class="flex items-end gap-20">
				<div class="w-80 flex flex-col gap-4">
					<h3 class="text-2xl md:text-5xl/[1.1]">Apply now!</h3>
				</div>
				<div class="flex-1">
					<div class="bg-content/10 h-10 px-4 rounded-lg inline-flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
							<path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
							<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
						</svg><span class="text-sm">19 open positions</span>
					</div>
				</div>
			</div>
			<div class="mt-12 flex items-start gap-20">
				<div class="w-80 flex flex-col">
					<div class="relative p-px overflow-hidden rounded">
						<div class="relative overflow-hidden bg-content/5 border border-content/5 rounded">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="absolute inset-y-0 my-auto left-3 w-4 h-4 opacity-40">
								<path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd"></path>
							</svg><input class="w-64 h-11 pb-2.5 text-sm/none pl-10 border-none" type="search" placeholder="Type to search" />
						</div>
					</div>
					<div class="mt-5">
						<div x-data="{expanded: false, values: []}" x-init="$watch('values', value => $dispatch('location-changed', {value: value}))" class="p-px">
							<div class="text-lg font-medium">Location</div>
							<div class="mt-1 pb-4">
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Mexico" /><span class="opacity-80 font-light">Mexico</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="United States" /><span class="opacity-80 font-light">United States</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Scottsdale, Arizona" /><span class="opacity-80 font-light">Scottsdale, Arizona</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Bangalore, Karnataka" /><span class="opacity-80 font-light">Bangalore, Karnataka</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Guadalajara, Jalisco" /><span class="opacity-80 font-light">Guadalajara, Jalisco</span></label>
								</div>
							</div>
						</div>
						<div x-data="{expanded: false, values: []}" x-init="$watch('values', value => $dispatch('locationtype-changed', {value: value}))" class="p-px">
							<div class="text-lg font-medium">Type</div>
							<div class="mt-1 pb-4">
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Mexico" /><span class="opacity-80 font-light">Mexico</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="United States" /><span class="opacity-80 font-light">United States</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Scottsdale, Arizona" /><span class="opacity-80 font-light">Scottsdale, Arizona</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Bangalore, Karnataka" /><span class="opacity-80 font-light">Bangalore, Karnataka</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Guadalajara, Jalisco" /><span class="opacity-80 font-light">Guadalajara, Jalisco</span></label>
								</div>
							</div>
						</div>
						<div x-data="{expanded: false, values: []}" x-init="$watch('values', value => $dispatch('team-changed', {value: value}))" class="p-px">
							<div class="text-lg font-medium">Team</div>
							<div class="mt-1 pb-4">
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Sales" /><span class="opacity-80 font-light">Sales</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Customer Success" /><span class="opacity-80 font-light">Customer Success</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Technology" /><span class="opacity-80 font-light">Technology</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Marketing" /><span class="opacity-80 font-light">Marketing</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Product Development" /><span class="opacity-80 font-light">Product Development</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="People &amp; Culture" /><span class="opacity-80 font-light">People &amp; Culture</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Strategic Growth" /><span class="opacity-80 font-light">Strategic Growth</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Finance &amp; Accounting" /><span class="opacity-80 font-light">Finance &amp; Accounting</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Sales Operations" /><span class="opacity-80 font-light">Sales Operations</span></label>
								</div>
								<div>
									<label class="inline-flex items-center py-1 gap-3"><input type="checkbox" x-model="values" value="Administration &amp; Legal" /><span class="opacity-80 font-light">Administration &amp; Legal</span></label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-1">
					<div class="border-t border-b divide-y">
						<div class="group pt-5 pb-4 flex items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl">
									Oracle Integration Cloud Engineer
								</h3>
								<div class="flex items-center gap-2 opacity-70">
									<span class="text-sm/none tracking-wide">Business Technology</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">Mexico<!-- -->(<!-- -->Remote<!-- -->)</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">September 19, 2023</span>
								</div>
							</div>
							<a href="#" class="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs">Apply</a>
						</div>
						<div class="group pt-5 pb-4 flex items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl">
									Direct Sales Account Executive
								</h3>
								<div class="flex items-center gap-2 opacity-70">
									<span class="text-sm/none tracking-wide">Business Technology</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">Mexico<!-- -->(<!-- -->Remote<!-- -->)</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">September 19, 2023</span>
								</div>
							</div>
							<a href="#" class="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs">Apply</a>
						</div>
						<div class="group pt-5 pb-4 flex items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl">
									Product Specific Account Executive
								</h3>
								<div class="flex items-center gap-2 opacity-70">
									<span class="text-sm/none tracking-wide">Business Technology</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">Mexico<!-- -->(<!-- -->Remote<!-- -->)</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">September 19, 2023</span>
								</div>
							</div>
							<a href="#" class="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs">Apply</a>
						</div>
						<div class="group pt-5 pb-4 flex items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl">Director of Tax</h3>
								<div class="flex items-center gap-2 opacity-70">
									<span class="text-sm/none tracking-wide">Business Technology</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">Mexico<!-- -->(<!-- -->Remote<!-- -->)</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">September 19, 2023</span>
								</div>
							</div>
							<a href="#" class="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs">Apply</a>
						</div>
						<div class="group pt-5 pb-4 flex items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl">Sales Readiness Trainer</h3>
								<div class="flex items-center gap-2 opacity-70">
									<span class="text-sm/none tracking-wide">Business Technology</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">Mexico<!-- -->(<!-- -->Remote<!-- -->)</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">September 19, 2023</span>
								</div>
							</div>
							<a href="#" class="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs">Apply</a>
						</div>
						<div class="group pt-5 pb-4 flex items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl">Sales Readiness Trainer</h3>
								<div class="flex items-center gap-2 opacity-70">
									<span class="text-sm/none tracking-wide">Business Technology</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">Mexico<!-- -->(<!-- -->Remote<!-- -->)</span><span class="font-bold mx-1 opacity-80">·</span><span class="text-sm/none tracking-wide">September 19, 2023</span>
								</div>
							</div>
							<a href="#" class="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs">Apply</a>
						</div>
					</div>
					<div class="mt-10">
						<a href="#" class="button button-small">View All</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<script>
	document.addEventListener("alpine:init", () => {
		Alpine.data("careers", () => ({
			currentPage: 1,
			totalPages: 4,
			canGoBack: false,
			canGoForward: true,
			location: [],
			locationType: [],
			team: [],
			setPage: function(page) {
				this.currentPage = page;
				this.canGoForward = page < this.totalPages;
				this.canGoBack = page > 1;
			},
			previousPage() {
				if (this.currentPage > 1) this.setPage(this.currentPage - 1);
			},
			nextPage() {
				if (this.currentPage < this.totalPages)
					this.setPage(this.currentPage + 1);
			},
		}));
	});
</script>